package EcoleBack.Ecole.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String email;
    private String message;

    public Contact() {
    }

    public Contact(Long id, String nom, String email, String message) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.message=message;


    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String anneeScolaire) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }



}
