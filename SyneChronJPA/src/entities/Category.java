package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "book")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String category;

	public String getCategory() {
		return category;
	}

	public void setCategoy(String category) {
		this.category = category;
	}

	public int getId() {
		return id;
	}

}
