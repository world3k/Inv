package cn.gson.crm.controller.system;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import cn.gson.crm.common.AjaxResult;
import cn.gson.crm.common.DataGrid;
import cn.gson.crm.common.MySpecification;
import cn.gson.crm.common.MySpecification.Cnd;
import cn.gson.crm.model.dao.RegionDao;
import cn.gson.crm.model.domain.Member;
import cn.gson.crm.model.domain.Region;


/**
 * Region controller
 *
 * @author gson
 */
@Controller
@RequestMapping("/inv/region")
@Transactional(readOnly = true)
public class RegionController {

    Logger logger = Logger.getLogger(RoleController.class);

    @Autowired
    RegionDao regionDao;

  

    @RequestMapping
    public void index() {

    }

    @RequestMapping("/list")
    @ResponseBody
   /* public DataGrid<Region> list() {
    	return new DataGrid<>(regionDao.findAll(new Sort(Direction.DESC, "id")));
    }
*/
    
    
    public DataGrid<Region> list(int page, int rows, String name, String description) {
        PageRequest pr = new PageRequest(page - 1, rows);

        //使用了自定义的复杂查询，这就比原生的Specification的语法使用流畅多了
        Page pageData = regionDao.findAll(new MySpecification<Region>().and(
                Cnd.like("name", name)
        ).asc("id"), pr);

        return new DataGrid<>(pageData);
    }
    
    @RequestMapping("/form")
    public void form(Long id, Model model) {
        if (id != null) {
            ObjectMapper mapper = new ObjectMapper();
            Region region = regionDao.findOne(id);
            try {
                model.addAttribute("region", mapper.writeValueAsString(region));
            } catch (JsonProcessingException e) {
                logger.error("json conversion error", e);
            }
        }
    }

    @RequestMapping({"/save", "/update"})
    @Transactional
    @ResponseBody
    public AjaxResult save(@Valid Region region, Long[] roles, BindingResult br) {
        if (br.hasErrors()) {
            logger.error("对象校验失败：" + br.getAllErrors());
            return new AjaxResult(false).setData(br.getAllErrors());
        } else {
            if (region.getId() != null) {
                // 不在这里更新角色和密码
                Region orig = regionDao.findOne(region.getId());
                // 理论上这里一定是要找得到对象的
            } 

            regionDao.save(region);

            return new AjaxResult();
        }
    }

     
    @RequestMapping("/check")
    @ResponseBody
    public boolean check(String userName) {
        return regionDao.countByName(userName) == 0;
    }
    
    @RequestMapping("/delete")
    @Transactional
    @ResponseBody
    public AjaxResult delete(Long id) {
        try {
            
                regionDao.delete(id);
        } catch (Exception e) {
            return new AjaxResult(false).setMessage(e.getMessage());
        }
        return new AjaxResult();
    }
}
