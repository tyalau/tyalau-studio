import config from '@tyalau/eslint-config/react'

export default [
  { ignores: ['dist/**', 'false/**', '.sanity/**'] },
  ...config,
  // No Turborepo here, so there is no turbo.json to declare env vars in
  { rules: { 'turbo/no-undeclared-env-vars': 'off' } },
]
