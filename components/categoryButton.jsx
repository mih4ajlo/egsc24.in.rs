export default function categoryButton({name, handleChange}) {
  return (
    <select name={name} onChange={handleChange} required>
      <option value=""></option>
      <option value="22k">22k</option>
      <option value="21k">21k</option>
      <option value="20k">20k</option>
      <option value="19k">19k</option>
      <option value="18k">18k</option>
      <option value="17k">17k</option>
      <option value="16k">16k</option>
      <option value="15k">15k</option>
      <option value="14k">14k</option>
      <option value="13k">13k</option>
      <option value="12k">12k</option>
      <option value="11k">11k</option>
      <option value="10k">10k</option>
      <option value="9k">9k</option>
      <option value="8k">8k</option>
      <option value="7k">7k</option>
      <option value="6k">6k</option>
      <option value="5k">5k</option>
      <option value="4k">4k</option>
      <option value="3k">3k</option>
      <option value="2k">2k</option>
      <option value="1k">1k</option>

      <option value="1D">1D</option>
      <option value="2D">2D</option>
      <option value="3D">3D</option>
      <option value="4D">4D</option>
      <option value="5D">5D</option>
      <option value="6D">6D</option>
      <option value="7D">7D</option>
    </select>
  );
}
