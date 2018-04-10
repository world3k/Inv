package com.world.inv.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the customers_Address database table.
 * 
 */
@Entity
@NamedQuery(name="Customers_Address.findAll", query="SELECT c FROM Customers_Address c")
public class Customers_Address implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private Customers_AddressPK id;

	//bi-directional many-to-one association to Customer
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Customer customer;

	public Customers_Address() {
	}

	public Customers_AddressPK getId() {
		return this.id;
	}

	public void setId(Customers_AddressPK id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return this.customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

}