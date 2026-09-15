package EcoleBack.Ecole.Repository;

import EcoleBack.Ecole.Entity.Actualite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActualiteRepository extends JpaRepository<Actualite,Long> {
}
