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

		em.flush();

		return em.find(Book.class, id);
	}

	@Override
	@Transactional
	public Book create(String ruleJson) {

		ObjectMapper mapper = new ObjectMapper();
		Book r = null;
		try {
			r = mapper.readValue(ruleJson, Book.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		em.persist(r);
		em.flush();

		String query = "select i from Book i where i.id=(select max(id) from Book)";
		r = em.createQuery(query, Book.class).getSingleResult();

		return r;
	}

	@Override
	@Transactional
	public Book destroy(int id) {

		Book r = em.find(Book.class, id);

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
