// import { Navigate } from 'react-router';
// import { AppErrorStatus } from '../../../features/error/utils/error-constants';
// import { PathBuilder } from '../../../routes/constants';
// import { Permissions } from '../../../utilities/permission-maps';

// const hasPermission = (userPermissions, allowedPermissions) => {
//     const permissionScopesMap = new Map();
//     allowedPermissions.forEach(permission => {
//         permissionScopesMap.set(permission, true);
//     });
//     return userPermissions.some(
//         permission => permissionScopesMap.get(permission) ?? false
//     );
// };

// const AccessControl = ({
//     allowedPermissions,
//     children,
//     checkAccess = false,
//     renderLoading,
//     renderError,
//     extraAccessCheck,
//     extraAccessData
// }) => {
//     const role = useSelector(selectCurrentRole);
//     const { accessCheckInProgress, accessBlocked } = useAccessCheck({
//         skip: !checkAccess
//     });
//     if (checkAccess && accessCheckInProgress) {
//         return renderLoading != null ? (
//             renderLoading()
//         ) : (
//             <h1 className="flex h-dvh justify-center items-center">
//                 Loading...
//             </h1>
//         );
//     }
//     if (checkAccess && accessBlocked) {
//         return (
//             <Navigate
//                 to={PathBuilder.buildErrorByStatusPath(
//                     AppErrorStatus.Unauthorized
//                 )}
//                 replace={true}
//             />
//         );
//     }
//     const userPermissions = Permissions[role] ?? Permissions.DEFAULT;
//     const permissionGranted =
//         extraAccessCheck != null
//             ? extraAccessCheck(extraAccessData, role) &&
//               hasPermission(userPermissions, allowedPermissions)
//             : hasPermission(userPermissions, allowedPermissions);
//     if (!permissionGranted && renderError != null) {
//         return renderError();
//     }
//     if (!permissionGranted) {
//         return (
//             <Navigate
//                 to={PathBuilder.buildErrorByStatusPath(
//                     AppErrorStatus.Forbidden
//                 )}
//                 replace={true}
//             />
//         );
//     }
//     return children;
// };
// AccessControl.propTypes = {
//     allowedPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
//     children: PropTypes.node.isRequired,
//     checkAccess: PropTypes.bool,
//     renderLoading: PropTypes.func,
//     renderError: PropTypes.func,
//     extraAccessCheck: PropTypes.func,
//     extraAccessData: PropTypes.object
// };

// export { AccessControl };

// const Scopes = Object.freeze({
//     APP: {
//         SIDE_NAV_VIEW: 'nav.side:view',
//         MOBILE_NAV_VIEW: 'nav.mobile:view'
//     },
// });

// const Permissions = Object.freeze({
//     [Roles.DEFAULT]: [],
//     [Roles.LEARNER]: [
//         Scopes.APP.SIDE_NAV_VIEW,
//         Scopes.APP.MOBILE_NAV_VIEW,
//     ],
// });
