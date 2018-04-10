package com.world.inv.entities;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the customers_Address database table.
 * 
 */
@Embeddable
public class Customers_AddressPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	private String address;

	@Column(name="customer_id", insertable=false, updatable=false)
	private int customerId;

	public Customers_AddressPK() {
	}
	public String getAddress() {
		return this.address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getCustomerId() {
		return this.customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof Customers_AddressPK)) {
			return false;
		}
		Customers_AddressPK castOther = (Customers_AddressPK)other;
		return 
			this.address.equals(castOther.address)
			&& (this.customerId == castOther.customerId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.address.hashCode();
		hash = hash * prime + this.customerId;
		
		return hash;
	}
}