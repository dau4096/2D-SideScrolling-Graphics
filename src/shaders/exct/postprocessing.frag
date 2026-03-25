/* postprocessing.frag */
#version 460 core

in vec2 fragUV;
out vec4 fragColour;

uniform sampler2D stageAlbedo;
uniform sampler2DArray lightmaps;
uniform int numLights;


vec3 getLighting() {
	//Gets sum of lighting from the map.
	vec3 sum;
	for (uint i=0; i<numLights; i++) {sum += texture(lightmaps, vec3(i/float(numLights))).rgb;}
	return sum;
}


void main() {
	//Combines all lightmap values for this fragment, then multiplies by albedo.
	vec3 lighting = getLighting();
	vec3 colour = texture(stageAlbedo, fragUV).rgb;
	fragColour = vec4(colour * lighting, 1.0f);
}

