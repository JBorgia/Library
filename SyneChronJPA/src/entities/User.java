package entities;

//+------------+--------------+------+-----+---------+----------------+
//| Field      | Type         | Null | Key | Default | Extra          |
//+------------+--------------+------+-----+---------+----------------+
//| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
//| password   | varchar(256) | NO   |     | NULL    |                |
//| username   | varchar(42)  | NO   |     | NULL    |                |
//| goodevil   | int(11)      | YES  |     | 0       |                |
//| lawfulness | int(11)      | YES  |     | 0       |                |
//| type       | varchar(6)   | YES  |     | NULL    |                |
//+------------+--------------+------+-----+---------+----------------+

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	private int id;
	private String password;
	private String username;
	private String type;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getId() {
		return id;
	}

}
