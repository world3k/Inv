package cn.gson.crm.controller.system;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.gson.crm.common.AjaxResult;
import cn.gson.crm.common.DataGrid;
import cn.gson.crm.model.dao.RegionDao;
import cn.gson.crm.model.domain.Region;

/**
 * 角色管理控制器
 *
 * @author gson
 */
@Controller
@RequestMapping("/inv/region")
@Transactional(readOnly = true)
public class RegionController {
	

	 Logger logger = Logger.getLogger(RegionController.class);

	    @Autowired
	    RegionDao regionDao;

	    @RequestMapping
	    public void index() {
	    }

	    @RequestMapping("/list")
	    @ResponseBody
	    public DataGrid<Region> list() {
	        return new DataGrid<>(regionDao.findAll(new Sort(Direction.DESC, "id")));
	    }

	    @RequestMapping({"/save", "/update"})
	    @Transactional
	    @ResponseBody
	    public Object save(@Valid Region region, BindingResult br) {
	        if (br.hasErrors()) {
	            logger.error("对象校验失败：" + br.getAllErrors());
	            return new AjaxResult(false).setData(br.getAllErrors());
	        } else {
	            return regionDao.save(region);
	        }
	    }

	    @RequestMapping("/delete")
	    @Transactional
	    @ResponseBody
	    public AjaxResult delete(Long id) {
	        try {
	            regionDao.delete(id);
	        } catch (Exception e) {
	            return new AjaxResult().setMessage(e.getMessage());
	        }
	        return new AjaxResult();
	    }   
    
}
