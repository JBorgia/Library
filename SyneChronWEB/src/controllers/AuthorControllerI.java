package controllers;

import java.util.Collection;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import entities.Author;

public interface AuthorControllerI {

	public Collection<Author> index(HttpServletRequest req, HttpServletResponse res);
	
	public Author show(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Author update(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id,
			@RequestBody String rulesJson);

	public Author create(HttpServletRequest req, HttpServletResponse res, @RequestBody String rulesJson);

	public Author destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Map<String, Object> showArgs(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);
}