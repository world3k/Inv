package cn.gson.crm.model.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "region")
public class Region {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
 //   private List<Region> region;
	
	@Column(length = 30, unique = true, nullable = false)
	private String name;

	@Column(length = 512)
	private String description;	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	//public List<Region> getRegion() { 		return region; 	}
	
	//public void setRegion(List<Region> region) { 		this.region = region;  	}

	@Override
	public String toString() {
		return "Region [id=" + id + ", name=" + name + ", description=" + description+ "]";
	}
}
