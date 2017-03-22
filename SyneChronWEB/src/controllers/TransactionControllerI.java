package controllers;

import java.util.Collection;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import entities.Transaction;

public interface TransactionControllerI {

	public Collection<Transaction> index(HttpServletRequest req, HttpServletResponse res);
	
	public Transaction show(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Transaction update(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id,
			@RequestBody String rulesJson);

	public Transaction create(HttpServletRequest req, HttpServletResponse res, @RequestBody String rulesJson);

	public Transaction destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);

	public Map<String, Object> showArgs(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id);
}