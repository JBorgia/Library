package data;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Author;

public class AuthorDAO implements AuthorDAOI {

	@PersistenceContext
	EntityManager em;

	@Override
	public Collection<Author> index() {
		String query = "select b from Author b where b.id > 0";
		Collection<Author> Authors = em.createQuery(query, Author.class).getResultList();
		return Authors;
	}

	@Override
	public Author show(int id) {
		Author Author = em.find(Author.class, id);
		return Author;
	}

	@Override
	@Transactional
	public Author update(int id, String AuthorJson) {

		ObjectMapper mapper = new ObjectMapper();
		Author updateAuthor = null;
		try {
			updateAuthor = mapper.readValue(AuthorJson, Author.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		Author oldAuthor = em.find(Author.class, id);
		oldAuthor.setFirst(updateAuthor.getFirst());
		oldAuthor.setMiddle(updateAuthor.getMiddle());
		oldAuthor.setLast(updateAuthor.getLast());
		oldAuthor.setBirth(updateAuthor.getBirth());
		oldAuthor.setDeath(updateAuthor.getDeath());

		em.flush();

		return em.find(Author.class, id);
	}

	@Override
	@Transactional
	public Author create(String ruleJson) {

		ObjectMapper mapper = new ObjectMapper();
		Author newAuthor = null;
		try {
			newAuthor = mapper.readValue(ruleJson, Author.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		em.persist(newAuthor);
		em.flush();

		String query = "select i from Author i where i.id=(select max(id) from Author)";
		newAuthor = em.createQuery(query, Author.class).getSingleResult();

		System.out.println("SYSTEM CREATED NEW AUTHOR: " + newAuthor);
		return newAuthor;
	}

	@Override
	@Transactional
	public Author destroy(int id) {

		Author r = em.find(Author.class, id);

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
