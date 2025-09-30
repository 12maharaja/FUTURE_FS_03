package rollsroyce.example.rollsroyce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rollsroyce.example.rollsroyce.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
