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

import data.AuthorDAOI;
import entities.Author;

@RestController
public class AuthorController {

	@Autowired
	private AuthorDAOI authorDAO; // Create Data Access Object for managed CRUD
								// with mySQL database

	// Respond to request by returning all Authors
	@RequestMapping(path = "author", method = RequestMethod.GET)
	public Collection<Author> index(HttpServletRequest req, HttpServletResponse res) {
		System.out.println("api/author index called");
		return authorDAO.index();
	}

	// Respond to request by returning single, specific Author
	@RequestMapping(path = "author/{id}", method = RequestMethod.GET)
	public Author show(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id) {
		return authorDAO.show(id);
	}

	// Respond to request by passing updates to DAO from HSP res in JSON format
	// and returning updated Author from DAO
	@RequestMapping(path = "author/{id}", method = RequestMethod.PUT)
	public Author update(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id,
			@RequestBody String authorJson) {
		return authorDAO.update(id, authorJson);
	}

	// Respond to request by passing JSON for new Author to DAO and returning
	// successfully saved Author
	@RequestMapping(path = "author", method = RequestMethod.POST)
	public Author create(HttpServletRequest req, HttpServletResponse res, @RequestBody String authorJson) {
		System.out.println("api/author create called");
		return authorDAO.create(authorJson);
	}

	// Respond to request by destroying/deleting specific Author and returning
	// deleted Author information back to front end's angular asynchronous
	// service
	@RequestMapping(path = "author/{id}", method = RequestMethod.DELETE)
	public Author destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id) {
		return authorDAO.destroy(id);
	}

}
