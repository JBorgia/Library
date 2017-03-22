package data;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Book;

public class BookDAO implements BookDAOI {

	@PersistenceContext
	EntityManager em;

	@Override
	public Collection<Book> index() {
		String query = "select b from Book b where b.id > 0";
		Collection<Book> Books = em.createQuery(query, Book.class).getResultList();
		return Books;
	}

	@Override
	public Book show(int id) {
		Book Book = em.find(Book.class, id);
		return Book;
	}

	@Override
	@Transactional
	public Book update(int id, String BookJson) {

		ObjectMapper mapper = new ObjectMapper();
		Book updateBook = null;
		try {
			updateBook = mapper.readValue(BookJson, Book.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		Book oldBook = em.find(Book.class, id);
		oldBook.setAuthor(updateBook.getAuthor());
		oldBook.setQuantity(updateBook.getQuantity());
		oldBook.setIssued(updateBook.getIssued());

		em.flush();

		return em.find(Book.class, id);
	}

	@Override
	@Transactional
	public Book create(String ruleJson) {

		ObjectMapper mapper = new ObjectMapper();
		Book newBook = null;
		try {
			newBook = mapper.readValue(ruleJson, Book.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		em.persist(newBook);
		em.flush();

		String query = "select b from Book b where b.id=(select max(id) from Book)";
		newBook = em.createQuery(query, Book.class).getSingleResult();

		System.out.println(newBook);
		return newBook;
	}

	@Override
	@Transactional
	public Book destroy(int id) {

		Book deleteBook = em.find(Book.class, id);

		try {
			em.remove(deleteBook);
			em.flush();
			return deleteBook;
		} catch (IllegalArgumentException iae) {
			iae.printStackTrace();
			return null;
		}

	}

}
