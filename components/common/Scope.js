const Scope = ({ scope }) => (
  <label className="flex gap-x-2 mb-3">
    <input type="checkbox" name={scope.label} value={scope.value} />
    <span>{scope.label}</span>
  </label>
);

export default Scope;
