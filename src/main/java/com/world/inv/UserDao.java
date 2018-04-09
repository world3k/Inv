package com.world.inv;

//useless

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.world.inv.entities.User;

@Repository
public class UserDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	public Object createUser(User user) {
	
	Session session=null;
	try {
	   session=sessionFactory.openSession();
	   session.beginTransaction();
	   Integer id=(Integer)session.save(user);
	   System.out.println("User is created with id:"+id);
	   session.getTransaction().commit();
	   return "User is created with id:"+id ;
	}
	catch (Exception e) {
		e.printStackTrace();
		return null;
	}


}
}