package com.world.inv.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the regions database table.
 * 
 */
@Entity
@Table(name="regions")
@NamedQuery(name="Region.findAll", query="SELECT r FROM Region r")
public class Region implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="region_id")
	private int regionId;

	private String description;

	private String name;

	//bi-directional many-to-one association to Customer
	@OneToMany(mappedBy="region")
	private List<Customer> customers;

	//bi-directional many-to-one association to Employee
	@ManyToOne
	@JoinColumn(name="employee_id")
	private Employee employee;

	//bi-directional many-to-one association to Warehous
	@OneToMany(mappedBy="region")
	private List<Warehous> warehouses;

	public Region() {
	}

	public int getRegionId() {
		return this.regionId;
	}

	public void setRegionId(int regionId) {
		this.regionId = regionId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Customer> getCustomers() {
		return this.customers;
	}

	public void setCustomers(List<Customer> customers) {
		this.customers = customers;
	}

	public Customer addCustomer(Customer customer) {
		getCustomers().add(customer);
		customer.setRegion(this);

		return customer;
	}

	public Customer removeCustomer(Customer customer) {
		getCustomers().remove(customer);
		customer.setRegion(null);

		return customer;
	}

	public Employee getEmployee() {
		return this.employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public List<Warehous> getWarehouses() {
		return this.warehouses;
	}

	public void setWarehouses(List<Warehous> warehouses) {
		this.warehouses = warehouses;
	}

	public Warehous addWarehous(Warehous warehous) {
		getWarehouses().add(warehous);
		warehous.setRegion(this);

		return warehous;
	}

	public Warehous removeWarehous(Warehous warehous) {
		getWarehouses().remove(warehous);
		warehous.setRegion(null);

		return warehous;
	}

}