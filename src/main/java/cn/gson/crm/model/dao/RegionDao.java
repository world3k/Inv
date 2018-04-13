package cn.gson.crm.model.dao;

import cn.gson.crm.model.domain.Region;
import cn.gson.crm.model.domain.Role;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionDao extends PagingAndSortingRepository<Region, Long> {
	 List<Region> findByName(String name);
}
