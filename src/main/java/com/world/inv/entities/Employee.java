package com.world.inv.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the employees database table.
 * 
 */
@Entity
@Table(name="employees")
@NamedQuery(name="Employee.findAll", query="SELECT e FROM Employee e")
public class Employee implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="employee_id")
	private int employeeId;

	@Temporal(TemporalType.DATE)
	private Date dob;

	private String email;

	private String name;

	@Column(name="phone_number")
	private String phoneNumber;

	//bi-directional many-to-one association to Category
	@OneToMany(mappedBy="employee")
	private List<Category> categories;

	//bi-directional many-to-one association to SystemUser
	@ManyToOne
	@JoinColumn(name="user_id")
	private SystemUser systemUser;

	//bi-directional many-to-one association to Region
	@OneToMany(mappedBy="employee")
	private List<Region> regions;

	//bi-directional many-to-one association to Warehous
	@OneToMany(mappedBy="employee")
	private List<Warehous> warehouses;

	public Employee() {
	}

	public int getEmployeeId() {
		return this.employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public Date getDob() {
		return this.dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
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
		category.setEmployee(this);

		return category;
	}

	public Category removeCategory(Category category) {
		getCategories().remove(category);
		category.setEmployee(null);

		return category;
	}

	public SystemUser getSystemUser() {
		return this.systemUser;
	}

	public void setSystemUser(SystemUser systemUser) {
		this.systemUser = systemUser;
	}

	public List<Region> getRegions() {
		return this.regions;
	}

	public void setRegions(List<Region> regions) {
		this.regions = regions;
	}

	public Region addRegion(Region region) {
		getRegions().add(region);
		region.setEmployee(this);

		return region;
	}

	public Region removeRegion(Region region) {
		getRegions().remove(region);
		region.setEmployee(null);

		return region;
	}

	public List<Warehous> getWarehouses() {
		return this.warehouses;
	}

	public void setWarehouses(List<Warehous> warehouses) {
		this.warehouses = warehouses;
	}

	public Warehous addWarehous(Warehous warehous) {
		getWarehouses().add(warehous);
		warehous.setEmployee(this);

		return warehous;
	}

	public Warehous removeWarehous(Warehous warehous) {
		getWarehouses().remove(warehous);
		warehous.setEmployee(null);

		return warehous;
	}

}