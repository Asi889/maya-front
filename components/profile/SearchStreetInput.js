import { Component } from 'react';
import Select from 'react-select';

const selectStyles = {
  control: (provided) => ({ ...provided, minWidth: 240, margin: 8 }),
  // menu: () => ({
  //   boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
  //   position: 'absolute',
  //   width: '100%',
  //   backgroundColor: 'white',
  // }),
};
export default class SearchStreetInput extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, value: undefined };
  }

  toggleOpen = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  optiosn1 = () => {
    const { theStreets } = this.props;
    if (!theStreets || !Array.isArray(theStreets)) return [];
    return theStreets?.map((street) => {
      const { name, id } = street;
      return {
        name,
        label: name,
        id,
      };
    });
  };

  onSelectChange = (value) => {
    this.toggleOpen();
    this.setState({ value });
    const { setTheStreet } = this.props;
    setTheStreet(value);
  };

  render() {
    const { isOpen, value } = this.state;
    return (
      <div className="relative">
        <Dropdown
          isOpen={isOpen}
          onClose={this.toggleOpen}
          className="absolute"
          target={
            <button
              name="street"
              type="button"
              className="bwc"
              iconafter={<ChevronDown />}
              onClick={this.toggleOpen}
              isselected={isOpen.toString()}
            >
              {value ? `  ${value.label}` : 'בחר רחוב  *'}
            </button>
          }
        >
          <Select
            autoFocus
            backspaceRemovesValue={false}
            //   components={{ DropdownIndicator, IndicatorSeparator: null }}
            controlShouldRenderValue={false}
            hideSelectedOptions={false}
            isClearable={false}
            menuIsOpen
            className="absolute w-full"
            onChange={this.onSelectChange}
            options={this.optiosn1()}
            placeholder="Search..."
            styles={selectStyles}
            tabSelectsValue={false}
            value={value}
          />
        </Dropdown>
      </div>
    );
  }
}

// styled components

const Menu = (props) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2,
      }}
      {...props}
    />
  );
};
const Blanket = (props) => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'absolute',
      zIndex: 1,
    }}
    {...props}
  />
);
const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div css={{ position: 'absolute' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
const Svg = (p) => (
  <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation" {...p} />
);
// const DropdownIndicator = () => (
//   <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
//     <Svg>
//       <path
//         d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </Svg>
//   </div>
// );
const ChevronDown = () => (
  <Svg style={{ marginRight: -6 }}>
    <path
      d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Svg>
);
