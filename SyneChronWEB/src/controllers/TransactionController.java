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

import data.TransactionDAOI;
import entities.Transaction;

@RestController
public class TransactionController {

	@Autowired
	private TransactionDAOI transactionDAO; // Create Data Access Object for managed CRUD
								// with mySQL database

	// Respond to request by returning all Transactions
	@RequestMapping(path = "transaction", method = RequestMethod.GET)
	public Collection<Transaction> index(HttpServletRequest req, HttpServletResponse res) {
		System.out.println("api/transaction called");
		return transactionDAO.index();
	}

	// Respond to request by returning single, specific Transaction
	@RequestMapping(path = "transaction/{id}", method = RequestMethod.GET)
	public Transaction show(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id) {
		return transactionDAO.show(id);
	}

	// Respond to request by passing updates to DAO from HSP res in JSON format
	// and returning updated Transaction from DAO
	@RequestMapping(path = "transaction/{id}", method = RequestMethod.PUT)
	public Transaction update(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id,
			@RequestBody String transactionJson) {
		return transactionDAO.update(id, transactionJson);
	}

	// Respond to request by passing JSON for new Transaction to DAO and returning
	// successfully saved Transaction
	@RequestMapping(path = "transaction", method = RequestMethod.POST)
	public Transaction create(HttpServletRequest req, HttpServletResponse res, @RequestBody String transactionJson) {
		return transactionDAO.create(transactionJson);
	}

	// Respond to request by destroying/deleting specific Transaction and returning
	// deleted Transaction information back to front end's angular asynchronous
	// service
	@RequestMapping(path = "transaction/{id}", method = RequestMethod.DELETE)
	public Transaction destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable("id") int id) {
		return transactionDAO.destroy(id);
	}

}
