package com.world.inv.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the Product_Images database table.
 * 
 */
@Entity
@Table(name="Product_Images")
@NamedQuery(name="Product_Image.findAll", query="SELECT p FROM Product_Image p")
public class Product_Image implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int image_id;

	private String description;

	private String link;

	//bi-directional many-to-one association to Product
	@ManyToOne
	@JoinColumn(name="product_id")
	private Product product;

	public Product_Image() {
	}

	public int getImage_id() {
		return this.image_id;
	}

	public void setImage_id(int image_id) {
		this.image_id = image_id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLink() {
		return this.link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public Product getProduct() {
		return this.product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

}