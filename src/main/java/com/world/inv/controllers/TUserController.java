package com.world.inv.controllers;


import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.world.inv.utils.JSONResult;
import com.world.inv.utils.TUser;

//@Controller
@RestController		// @RestController = @Controller + @ResponseBody
@RequestMapping("/tuser")
public class TUserController {

	@RequestMapping("/getTUser")
//	@ResponseBody
	public TUser getTUser() {
		
		TUser u = new TUser();
		u.setName("imooc2");
		u.setAge(18);
		u.setBirthday(new Date());
		u.setPassword("imooc2");
		u.setDesc("hello imooc2~~");
		
		return u;
	}
	
	@RequestMapping("/getTUserJson")
//	@ResponseBody
	public JSONResult getUserJson() {
		
		TUser u = new TUser();
		u.setName("imooc");
		u.setAge(18);
		u.setBirthday(new Date());
		u.setPassword("imooc");
		u.setDesc("hello imooc~~hello imooc~~");
		
		return JSONResult.ok(u);
	}
}
