package controllers;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.CategoryDAOI;
import entities.Category;

@RestController
public class CategoryController {

	@Autowired
	private CategoryDAOI categoryDAO; // Create Data Access Object for managed CRUD
								// with mySQL database

	// Respond to request by returning all Categories
	@RequestMapping(path = "category", method = RequestMethod.GET)
	public Collection<Category> index(HttpServletRequest req, HttpServletResponse res) {
		System.out.println("api/category called");
		return categoryDAO.index();
	}

	// Respond to request by returning single, specific Category
	@RequestMapping(path = "category/{id}", method = RequestMethod.GET)
	public Category show(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id) {
		return categoryDAO.show(id);
	}

	// Respond to request by passing updates to DAO from HSP res in JSON format
	// and returning updated Category from DAO
	@RequestMapping(path = "category/{id}", method = RequestMethod.PUT)
	public Category update(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id,
			@RequestBody String categoryJson) {
		return categoryDAO.update(id, categoryJson);
	}

	// Respond to request by passing JSON for new Category to DAO and returning
	// successfully saved Category
	@RequestMapping(path = "category", method = RequestMethod.POST)
	public Category create(HttpServletRequest req, HttpServletResponse res, @RequestBody String categoryJson) {
		return categoryDAO.create(categoryJson);
	}

	// Respond to request by destroying/deleting specific Category and returning
	// deleted Category information back to front end's angular asynchronous
	// service
	@RequestMapping(path = "category/{id}", method = RequestMethod.DELETE)
	public Category destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id) {
		return categoryDAO.destroy(id);
	}

}
