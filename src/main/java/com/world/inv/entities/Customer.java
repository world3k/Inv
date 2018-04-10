package com.world.inv.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the customers database table.
 * 
 */
@Entity
@Table(name="customers")
@NamedQuery(name="Customer.findAll", query="SELECT c FROM Customer c")
public class Customer implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="customer_id")
	private int customerId;

	@Temporal(TemporalType.DATE)
	private Date dob;

	@Column(name="email_address")
	private String emailAddress;

	private String gender;

	private String name;

	@Column(name="phone_number")
	private String phoneNumber;

	//bi-directional many-to-one association to Category
	@OneToMany(mappedBy="customer")
	private List<Category> categories;

	//bi-directional many-to-one association to Region
	@ManyToOne
	@JoinColumn(name="region_id")
	private Region region;

	//bi-directional many-to-one association to SystemUser
	@ManyToOne
	@JoinColumn(name="user_id")
	private SystemUser systemUser;

	//bi-directional many-to-one association to Customers_Address
	@OneToMany(mappedBy="customer")
	private List<Customers_Address> customersAddresses;

	//bi-directional many-to-one association to Inventory
	@OneToMany(mappedBy="customer")
	private List<Inventory> inventories;

	public Customer() {
	}

	public int getCustomerId() {
		return this.customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public Date getDob() {
		return this.dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getEmailAddress() {
		return this.emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhoneNumber() {
		return this.phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public List<Category> getCategories() {
		return this.categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public Category addCategory(Category category) {
		getCategories().add(category);
		category.setCustomer(this);

		return category;
	}

	public Category removeCategory(Category category) {
		getCategories().remove(category);
		category.setCustomer(null);

		return category;
	}

	public Region getRegion() {
		return this.region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	public SystemUser getSystemUser() {
		return this.systemUser;
	}

	public void setSystemUser(SystemUser systemUser) {
		this.systemUser = systemUser;
	}

	public List<Customers_Address> getCustomersAddresses() {
		return this.customersAddresses;
	}

	public void setCustomersAddresses(List<Customers_Address> customersAddresses) {
		this.customersAddresses = customersAddresses;
	}

	public Customers_Address addCustomersAddress(Customers_Address customersAddress) {
		getCustomersAddresses().add(customersAddress);
		customersAddress.setCustomer(this);

		return customersAddress;
	}

	public Customers_Address removeCustomersAddress(Customers_Address customersAddress) {
		getCustomersAddresses().remove(customersAddress);
		customersAddress.setCustomer(null);

		return customersAddress;
	}

	public List<Inventory> getInventories() {
		return this.inventories;
	}

	public void setInventories(List<Inventory> inventories) {
		this.inventories = inventories;
	}

	public Inventory addInventory(Inventory inventory) {
		getInventories().add(inventory);
		inventory.setCustomer(this);

		return inventory;
	}

	public Inventory removeInventory(Inventory inventory) {
		getInventories().remove(inventory);
		inventory.setCustomer(null);

		return inventory;
	}

}