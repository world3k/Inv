package com.world.inv.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the Inventories database table.
 * 
 */
@Entity
@Table(name="Inventories")
@NamedQuery(name="Inventory.findAll", query="SELECT i FROM Inventory i")
public class Inventory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int inventory_id;

	@Column(name="amount_in_stock")
	private int amountInStock;

	private int maximum_quantity;

	private BigDecimal price;

	@Column(name="product_status")
	private int productStatus;

	@Temporal(TemporalType.DATE)
	private Date refill_date;

	private int refill_point;

	//bi-directional many-to-one association to Warehous
	@ManyToOne
	@JoinColumn(name="warehouse_id")
	private Warehous warehous;

	//bi-directional many-to-one association to Customer
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Customer customer;

	//bi-directional many-to-many association to Product
	@ManyToMany
	@JoinTable(
		name="Products_to_inventories"
		, joinColumns={
			@JoinColumn(name="Inventory_id")
			}
		, inverseJoinColumns={
			@JoinColumn(name="product_id")
			}
		)
	private List<Product> products;

	public Inventory() {
	}

	public int getInventory_id() {
		return this.inventory_id;
	}

	public void setInventory_id(int inventory_id) {
		this.inventory_id = inventory_id;
	}

	public int getAmountInStock() {
		return this.amountInStock;
	}

	public void setAmountInStock(int amountInStock) {
		this.amountInStock = amountInStock;
	}

	public int getMaximum_quantity() {
		return this.maximum_quantity;
	}

	public void setMaximum_quantity(int maximum_quantity) {
		this.maximum_quantity = maximum_quantity;
	}

	public BigDecimal getPrice() {
		return this.price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public int getProductStatus() {
		return this.productStatus;
	}

	public void setProductStatus(int productStatus) {
		this.productStatus = productStatus;
	}

	public Date getRefill_date() {
		return this.refill_date;
	}

	public void setRefill_date(Date refill_date) {
		this.refill_date = refill_date;
	}

	public int getRefill_point() {
		return this.refill_point;
	}

	public void setRefill_point(int refill_point) {
		this.refill_point = refill_point;
	}

	public Warehous getWarehous() {
		return this.warehous;
	}

	public void setWarehous(Warehous warehous) {
		this.warehous = warehous;
	}

	public Customer getCustomer() {
		return this.customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Product> getProducts() {
		return this.products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

}