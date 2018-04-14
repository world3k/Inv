package cn.gson.crm.model.dao;

import cn.gson.crm.model.domain.Region;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionDao extends PagingAndSortingRepository<Region, Long>, JpaSpecificationExecutor {

    int countByName(String name);
    Region findByName(String name);
}
