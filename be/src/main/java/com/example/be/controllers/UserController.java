package com.example.be.controllers;

import com.example.be.models.User;
import com.example.be.services.EmailService;
import com.example.be.services.UserService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        return new ResponseEntity<>(userService.all(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        return new ResponseEntity<>(userService.get(id), HttpStatus.OK);
    }

    @PostMapping("/login")
    ResponseEntity<ResponseObject> login(@RequestBody User user) {
        User userFind = userService.login(user.getEmail(), user.getPassword());
        return userFind != null ?
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject("ok", "Login successful", userFind)
                ) :
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject("failed", "Invalid username or password", "")
                );
    }
//    @PostMapping("/login")
//    public ResponseEntity<User> login(@RequestBody User user) {
//        User userFind = userService.login(user.getEmail(), user.getPassword());
//        if (userFind == null) {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//        return new ResponseEntity<>(userFind, HttpStatus.OK);
//    }

    @PutMapping("/update")
    public User update(@RequestBody User user) {
        User u = userService.get(user.getId());

        return userService.update(user);
    }

    ResponseEntity<ResponseObject> sendBillEmail(@RequestParam String email) {
        try {
            User user = userService.findByEmail(email);
            Map<String, Object> templateModel = new HashMap<>();
            templateModel.put("name", user.getName());
            emailService.sendHtmlEmailPaymentSuccess(email, "Your Bill!", templateModel);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok", "Send new password successful", "")
            );
        } catch (MessagingException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("failed", "Send new password fail", "")
            );
        }
    }


}
