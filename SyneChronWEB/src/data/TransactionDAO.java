package data;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Transaction;

public class TransactionDAO implements TransactionDAOI {

	@PersistenceContext
	EntityManager em;

	@Override
	public Collection<Transaction> index() {
		String query = "select b from Transaction b where b.id > 0";
		Collection<Transaction> Transactions = em.createQuery(query, Transaction.class).getResultList();
		return Transactions;
	}

	@Override
	public Transaction show(int id) {
		Transaction Transaction = em.find(Transaction.class, id);
		return Transaction;
	}

	@Override
	@Transactional
	public Transaction update(int id, String TransactionJson) {

		ObjectMapper mapper = new ObjectMapper();
		Transaction updateTransaction = null;
		try {
			updateTransaction = mapper.readValue(TransactionJson, Transaction.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		Transaction oldTransaction = em.find(Transaction.class, id);
		oldTransaction.setBook(updateTransaction.getBook());
		oldTransaction.setTransDate(updateTransaction.getTransDate());
		oldTransaction.setTransDate(updateTransaction.getTransDate());
		oldTransaction.setType(updateTransaction.getType());

		em.flush();

		return em.find(Transaction.class, id);
	}

	@Override
	@Transactional
	public Transaction create(String ruleJson) {

		ObjectMapper mapper = new ObjectMapper();
		Transaction r = null;
		try {
			r = mapper.readValue(ruleJson, Transaction.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		em.persist(r);
		em.flush();

		String query = "select i from Transaction i where i.id=(select max(id) from Transaction)";
		r = em.createQuery(query, Transaction.class).getSingleResult();

		return r;
	}

	@Override
	@Transactional
	public Transaction destroy(int id) {

		Transaction r = em.find(Transaction.class, id);

		try {
			em.remove(r);
			em.flush();
			return r;
		} catch (IllegalArgumentException iae) {
			iae.printStackTrace();
			return null;
		}

	}

}
