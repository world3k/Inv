package com.world.inv.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;


/**
 * The persistent class for the products database table.
 * 
 */
@Entity
@Table(name="products")
@NamedQuery(name="Product.findAll", query="SELECT p FROM Product p")
public class Product implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="product_id")
	private int productId;

	private String color;

	private String description;

	private String name;

	private BigDecimal weight;

	//bi-directional many-to-one association to Product_Image
	@OneToMany(mappedBy="product")
	private List<Product_Image> productImages;

	//bi-directional many-to-many association to Category
	@ManyToMany
	@JoinTable(
		name="Categories_To_Products"
		, joinColumns={
			@JoinColumn(name="product_id")
			}
		, inverseJoinColumns={
			@JoinColumn(name="category_id")
			}
		)
	private List<Category> categories;

	//bi-directional many-to-many association to Inventory
	@ManyToMany(mappedBy="products")
	private List<Inventory> inventories;

	public Product() {
	}

	public int getProductId() {
		return this.productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getColor() {
		return this.color;
	}

	public void setColor(String color) {
		this.color = color;
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

	public BigDecimal getWeight() {
		return this.weight;
	}

	public void setWeight(BigDecimal weight) {
		this.weight = weight;
	}

	public List<Product_Image> getProductImages() {
		return this.productImages;
	}

	public void setProductImages(List<Product_Image> productImages) {
		this.productImages = productImages;
	}

	public Product_Image addProductImage(Product_Image productImage) {
		getProductImages().add(productImage);
		productImage.setProduct(this);

		return productImage;
	}

	public Product_Image removeProductImage(Product_Image productImage) {
		getProductImages().remove(productImage);
		productImage.setProduct(null);

		return productImage;
	}

	public List<Category> getCategories() {
		return this.categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public List<Inventory> getInventories() {
		return this.inventories;
	}

	public void setInventories(List<Inventory> inventories) {
		this.inventories = inventories;
	}

}