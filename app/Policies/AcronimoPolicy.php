<?php

namespace App\Policies;

use App\Models\Acronimo;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class AcronimoPolicy
{

    /**
     * Perform pre-authorization checks.
     */
    public function before(User $user, string $ability): bool|null
    {
        if (!$user->hasRole("ADMIN")) {
            return false;
        }

        return true;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function viewAdmin(User $user): bool
    {
        if (!$user->hasRole("ADMIN")) {
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        if (!$user->hasRole("ADMIN")) {
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Acronimo $acronimo): bool
    {
        if (!$user->hasRole("ADMIN")) {
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Acronimo $acronimo): bool
    {
        if (!$user->hasRole("ADMIN")) {
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Acronimo $acronimo): bool
    {
        if (!$user->hasRole("ADMIN")) {
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Acronimo $acronimo): bool
    {
        if (!$user->hasRole("ADMIN")) {
            return false;
        }
        return true;
    }
}
