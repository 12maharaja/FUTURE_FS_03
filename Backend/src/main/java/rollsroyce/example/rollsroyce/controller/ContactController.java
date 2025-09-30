package rollsroyce.example.rollsroyce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rollsroyce.example.rollsroyce.entity.Contact;
import rollsroyce.example.rollsroyce.repository.ContactRepository;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173") // React port
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public Contact saveContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    @GetMapping
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }
}
