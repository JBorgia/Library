package controllers;

import java.util.Collection;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import entities.Category;

public interface CategoryControllerI {

	public Collection<Category> index(HttpServletRequest req, HttpServletResponse res);
	
	public Category show(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Category update(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id,
			@RequestBody String rulesJson);

	public Category create(HttpServletRequest req, HttpServletResponse res, @RequestBody String rulesJson);

	public Category destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Map<String, Object> showArgs(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);
}