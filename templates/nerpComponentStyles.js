/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpComponentStyles'

// ------------------------------------
// OUTPUT
// ------------------------------------
@import "../../styles/base";

.componentName {


  @include mobile {

	}
}


// ------------------------------------
// INPUT
// ------------------------------------
@import "../../styles/base";

.${1:componentName} {
  ${2}

  @include mobile {
    ${3}
	}
}${4}


// ------------------------------------
// GENERATED
// ------------------------------------
'@import "../../styles/base";\n\n.${1:componentName} {\n\t${2}\n\n\t@include mobile {\n\t\t${3}\n\t}\n}${4}'
