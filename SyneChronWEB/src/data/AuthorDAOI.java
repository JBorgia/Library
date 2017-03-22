package data;

import java.util.Collection;

import entities.Author;

public interface AuthorDAOI {

	public Collection<Author> index();

	public Author show(int id);

	public Author update(int id, String todoJson);

	public Author create(String todoJson);

	public Author destroy(int id);

}
