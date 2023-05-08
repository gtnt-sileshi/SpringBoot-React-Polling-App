package com.co.ApiRest.service;

import com.co.ApiRest.model.User;
import com.co.ApiRest.repository.UserRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> listAllUser(){
        return userRepository.findAll();
    }
    
    public void saveUser(User user){
        userRepository.save(user);
    }
    
    public User getUser(Integer id){
        return userRepository.findById(id).get();
    }
    
    public void DeleteUser(Integer id){
        userRepository.deleteById(id);
    }
    
}
