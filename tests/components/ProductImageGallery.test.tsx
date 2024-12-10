import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    // Crée un tableau contenant les URL des images à tester.
    const imageUrls = ["image1.jpg", "image2.jpg", "image3.jpg"];
    // Rend le composant `ProductImageGallery` avec les URL fournies.
    render(<ProductImageGallery imageUrls={imageUrls} />);
    // Récupère tous les éléments avec le rôle "img" dans le DOM rendu.
    // Cela correspond aux balises `<img>` générées par le composant.
    const images = screen.getAllByRole("img");
     // Vérifie que le nombre d'images affichées est égal au nombre d'URL dans le tableau `imageUrls`.
    expect(images).toHaveLength(imageUrls.length);
    // Vérifie que chaque image rendue a l'attribut `src` correspondant à l'URL attendue.
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
