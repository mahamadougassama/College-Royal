package EcoleBack.Ecole.Repository;

import EcoleBack.Ecole.Entity.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Administrateur,Long> {
    public Administrateur findByNom(String nom);
}
