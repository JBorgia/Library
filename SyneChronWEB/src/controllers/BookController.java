package controllers;

import java.util.Collection;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.BookDAOI;
import entities.Book;

@RestController
public class BookController {

	@Autowired
	private BookDAOI bookDAO; // Create Data Access Object for managed CRUD
								// with mySQL database

	// Respond to request by returning all Books
	@RequestMapping(path = "book", method = RequestMethod.GET)
	public Collection<Book> index(HttpServletRequest req, HttpServletResponse res) {
		System.out.println("api/book called");
		return bookDAO.index();
	}

	// Respond to request by returning single, specific Book
	@RequestMapping(path = "book/{id}", method = RequestMethod.GET)
	public Book show(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id) {
		return bookDAO.show(id);
	}

	// Respond to request by passing updates to DAO from HSP res in JSON format
	// and returning updated Book from DAO
	@RequestMapping(path = "book/{id}", method = RequestMethod.PUT)
	public Book update(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id,
			@RequestBody String bookJson) {
		return bookDAO.update(id, bookJson);
	}

	// Respond to request by passing JSON for new Book to DAO and returning
	// successfully saved Book
	@RequestMapping(path = "book", method = RequestMethod.POST)
	public Book create(HttpServletRequest req, HttpServletResponse res, @RequestBody String bookJson) {
		return bookDAO.create(bookJson);
	}

	// Respond to request by destroying/deleting specific Book and returning
	// deleted Book information back to front end's angular asynchronous
	// service
	@RequestMapping(path = "book/{id}", method = RequestMethod.DELETE)
	public Book destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id) {
		return bookDAO.destroy(id);
	}

}
