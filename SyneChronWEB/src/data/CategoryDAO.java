package data;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Category;

public class CategoryDAO implements CategoryDAOI {

	@PersistenceContext
	EntityManager em;

	@Override
	public Collection<Category> index() {
		String query = "select c from Category c where c.id > 0";
		Collection<Category> Categories = em.createQuery(query, Category.class).getResultList();
		return Categories;
	}

	@Override
	public Category show(int id) {
		Category Category = em.find(Category.class, id);
		return Category;
	}

	@Override
	@Transactional
	public Category update(int id, String CategoryJson) {

		ObjectMapper mapper = new ObjectMapper();
		Category updateCategory = null;
		try {
			updateCategory = mapper.readValue(CategoryJson, Category.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		Category oldCategory = em.find(Category.class, id);
		oldCategory.setName(updateCategory.getName());

		em.flush();

		return em.find(Category.class, id);
	}

	@Override
	@Transactional
	public Category create(String ruleJson) {

		ObjectMapper mapper = new ObjectMapper();
		Category r = null;
		try {
			r = mapper.readValue(ruleJson, Category.class);
		} catch (Exception e) {
			System.out.println(e);
		}

		em.persist(r);
		em.flush();

		String query = "select i from Category i where i.id=(select max(id) from Category)";
		r = em.createQuery(query, Category.class).getSingleResult();

		return r;
	}

	@Override
	@Transactional
	public Category destroy(int id) {
		Category r = em.find(Category.class, id);

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
