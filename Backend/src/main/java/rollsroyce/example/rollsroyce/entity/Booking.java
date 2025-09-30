package rollsroyce.example.rollsroyce.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "bookings")   // ✅ DB table name
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String model;
    private String date;   // booking date
}
