package rollsroyce.example.rollsroyce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rollsroyce.example.rollsroyce.entity.Booking;
import rollsroyce.example.rollsroyce.repository.BookingRepository;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173") // React port
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping
    public Booking saveBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
