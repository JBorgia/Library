package data;

import java.util.Collection;

import entities.Book;

public interface BookDAOI {

	public Collection<Book> index();

	public Book show(int id);

	public Book update(int id, String todoJson);

	public Book create(String todoJson);

	public Book destroy(int id);

}
