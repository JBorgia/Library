package entities;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//+-----------+---------+------+-----+---------+----------------+
//| Field     | Type    | Null | Key | Default | Extra          |
//+-----------+---------+------+-----+---------+----------------+
//| id        | int(11) | NO   | PRI | NULL    | auto_increment |
//| team1id   | int(11) | NO   | MUL | NULL    |                |
//| team2id   | int(11) | NO   | MUL | NULL    |                |
//| time      | int(11) | NO   |     | NULL    |                |
//| side1time | int(11) | NO   |     | NULL    |                |
//| side2time | int(11) | YES  |     | NULL    |                |
//| points1   | int(11) | NO   |     | 0       |                |
//| points2   | int(11) | NO   |     | 0       |                |
//| winteam   | int(11) | NO   | MUL | NULL    |                |
//| loseteam  | int(11) | NO   | MUL | NULL    |                |
//+-----------+---------+------+-----+---------+----------------+

@Entity
@Table(name = "transaction")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Book book;
	@Column(name = "time_stamp")
	private Timestamp timeStamp;
	private String type;
	@Column(name = "trans_date")
	private Date transDate;

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public Timestamp getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Timestamp timeStamp) {
		this.timeStamp = timeStamp;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Date getTransDate() {
		return transDate;
	}

	public void setTransDate(Date transDate) {
		this.transDate = transDate;
	}

	public int getId() {
		return id;
	}

}
