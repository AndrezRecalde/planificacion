<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    /**
     * Determine whether the user can view any models.
     */

     function before(User $user): bool {
        if (!$user->hasRole("ADMIN")) {
           //return abort(403, 'Access to this resource on the server is denied');
           return false;
        }
        return true;
     }

    /* public function viewGeneral(User $user): bool
    {
        return true;
    } */

    /**
     * Determine whether the user can view the model.
     */
    /* public function viewAdmin(User $user): bool
    {
        if (!$user->hasRole("ADMIN")) {
            abort(403);
        }
        return true;
    } */

    /**
     * Determine whether the user can create models.
     */
    /* public function create(User $user): bool
    {
        if (!$user->hasRole("ADMIN")) {
            abort(403);
        }
        return true;
    } */

    /**
     * Determine whether the user can update the model.
     */
    /* public function update(User $user, User $model): bool
    {
        if (!$user->hasRole("ADMIN")) {
            abort(403);
        }
        return true;
    } */

    /**
     * Determine whether the user can update the model.
     */
    /* public function updateActivo(User $user, User $model): bool
    {
        if (!$user->hasRole("ADMIN")) {
            abort(403);
        }
        return true;
    } */

     /**
     * Determine whether the user can update the model.
     */
    public function updatePassword(User $authUser, $user): bool
    {
        return $authUser->id == $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    /* public function delete(User $user, User $model): bool
    {
        if (!$user->hasRole("ADMIN")) {
            abort(403);
        }
        return true;
    } */

    /**
     * Determine whether the user can restore the model.
     */
    /* public function restore(User $user, User $model): bool
    {
        if (!$user->hasRole("ADMIN")) {
            abort(403);
        }
        return true;
    } */

    /**
     * Determine whether the user can permanently delete the model.
     */
   /*  public function forceDelete(User $user, User $model): bool
    {
        if (!$user->hasRole("ADMIN")) {
            abort(403);
        }
        return true;
    } */
}
