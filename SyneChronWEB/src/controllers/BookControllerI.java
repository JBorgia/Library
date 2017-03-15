package controllers;

import java.util.Collection;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import entities.Book;

public interface BookControllerI {

	public Collection<Book> index(HttpServletRequest req, HttpServletResponse res);
	
	public Collection<Book> indexByUser(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Book show(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Book update(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id,
			@RequestBody String rulesJson);

	public Book create(HttpServletRequest req, HttpServletResponse res, @RequestBody String rulesJson);

	public Book destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Map<String, Object> showArgs(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);
}