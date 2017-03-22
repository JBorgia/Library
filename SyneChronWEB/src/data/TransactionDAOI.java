package data;

import java.util.Collection;

import entities.Transaction;

public interface TransactionDAOI {

	public Collection<Transaction> index();

	public Transaction show(int id);

	public Transaction update(int id, String todoJson);

	public Transaction create(String todoJson);

	public Transaction destroy(int id);

}
