
package com.co.ApiRest.repository;

import com.co.ApiRest.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{
    
}
