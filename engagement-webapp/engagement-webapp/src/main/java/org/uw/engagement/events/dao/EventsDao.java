//dao - repository

package org.uw.engagement.events.dao;
import org.uw.engagement.events.model.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface EventsDao extends CrudRepository<EventsDbModel, Integer> {

	public List<EventsDbModel> findById (int eventId);
	
	
	public EventsDbModel save(EventsDbModel event);
}
/*
import java.io.Serializable;
import java.util.ArrayList;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.uwyo.dao.StudentDAO;
import com.uwyo.model.StudentEntity;

@Repository
@Transactional
public class StudentDAOImpl implements StudentDAO {
	
	@Autowired
	SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	public ArrayList<StudentEntity> getStudentList() {
		Session session = sessionFactory.getCurrentSession();
		Query q = session.createQuery("from StudentEntity");
		ArrayList<StudentEntity> studentList = (ArrayList<StudentEntity>) q.list();
		//System.out.println(studentList.get(0).studentId);
		return studentList;
	}

	@Override
	public StudentEntity getStudentById(int id) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from StudentEntity where studentId=:studentId");
		query.setParameter("studentId", id);
		return (StudentEntity) query.list().get(0);
	}

	@Override
	public int setStudent(StudentEntity student) {
		Session session = sessionFactory.getCurrentSession();
		int val = 0;
		if(student!=null){
			session.save(student);
			val= 1;
		}
		 Serializable se = session.getIdentifier(student);
		System.out.println(se);
		//session.delete(student);
		return val;
	}
	
}*/
